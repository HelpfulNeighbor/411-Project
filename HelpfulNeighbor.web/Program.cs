using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DataContext"));
});

builder.Services.AddIdentity<User, Role>().AddEntityFrameworkStores<DataContext>().AddDefaultTokenProviders();

/*builder.Services.AddControllers();*/

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});
;
var services = builder.Services;

/*builder.Services.AddScoped<IResourceRepository, ResourceRepository>();
builder.Services.AddScoped<IShelterRepository, ShelterRepository>();*/

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddMvc();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    await SeedHelper.MigrateAndSeed(scope.ServiceProvider);
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

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

app.Run();
