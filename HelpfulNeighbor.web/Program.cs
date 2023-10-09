using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddTransient<SeedHelper>();
builder.Services.AddScoped<IResourceRepository, ResourceRepository>();
builder.Services.AddScoped<IShelterRepository, ShelterRepository>();
builder.Services.AddScoped<IHoursOfOperationRepository, HoursOfOperationRepository>();
builder.Services.AddScoped<ILocationRepository, LocationRepository>();
builder.Services.AddScoped<ISavedResourceRepository, SavedResourceRepository>();
builder.Services.AddScoped<ISavedShelterRepository, SavedShelterRepository>();
builder.Services.AddScoped<IUserCurrentLocationRepository, UserCurrentLocationRepository>();

builder.Services.AddIdentity<User, Role>()
    .AddEntityFrameworkStores<DataContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Events.OnRedirectToLogin = context =>
    {
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };

    options.Events.OnRedirectToAccessDenied = context =>
    {
        context.Response.StatusCode = 403;
        return Task.CompletedTask;
    };
});

// Add database context configuration
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DataContext"));
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(routeBuilder =>
{
    routeBuilder.MapControllers();
});

app.UseStaticFiles();
app.UseSpa(spaBuilder =>
{
    spaBuilder.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        spaBuilder.UseProxyToSpaDevelopmentServer("https://localhost:3000/");
    }
});

using (var scope = app.Services.CreateScope())
{
    await SeedData(scope.ServiceProvider, app.Environment.IsDevelopment());
}

app.Run();

async Task SeedData(IServiceProvider serviceProvider, bool isDevelopment)
{
    using var scope = serviceProvider.CreateScope();
    var service = scope.ServiceProvider.GetService<SeedHelper>();

    var jsonFilePaths = new List<string>
    {
        "Data/DataObjects/Location.json",
        "Data/DataObjects/Resource.json",
        "Data/DataObjects/Shelter.json",
        "Data/DataObjects/HoursOfOperation.json"
    };

    try
    {
        // Seed data only if in development environment
        if (isDevelopment)
        {
            await service.SeedDataFromJsonIfEmpty(jsonFilePaths);
        }
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetService<ILogger<Program>>();
        logger.LogError($"Error during data seeding: {ex.Message}");
        throw;
    }
}
