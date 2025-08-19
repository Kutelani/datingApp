//Emtity or Models are related to database tables. Variables in this class will be used on a database

namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Display { get; set; }

    public required string Email { get; set; }
}
