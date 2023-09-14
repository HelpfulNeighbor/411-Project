using Microsoft.EntityFrameworkCore;

namespace EFModeling.EntityProperties.FluentAPI.Required;

internal class MyContext : DbContext {
    public DbSet<AffordableHousing> AffordableHousing {get; set;}

    #region Required

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<AffordableHousing>()
            .Property(b => b.Url)
            .IsRequired
    }
    #endregion
}

public class AffordableHousing {
    public int ResourceId {get; set;}
    public string Name {get; set;}
    public string City {get; set;}
    public string Address {get; set;}
    public string AdditionalDetails {get; set;}
    public string Parish {get; set;}
    public string PhoneNumber {get; set;}
    public string Website {get; set;}
    public int ResourceType {get; set;}
}