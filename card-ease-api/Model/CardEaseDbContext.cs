using Microsoft.EntityFrameworkCore;

namespace card_ease_api.Model
{
    public class CardEaseDbContext : DbContext
    {
        public CardEaseDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<CardDetail> CardDetails { get; set; }
    }
}
