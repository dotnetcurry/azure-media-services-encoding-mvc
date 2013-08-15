namespace AzureMediaPortal.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedMediaElement : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MediaElements", "EncodingType", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.MediaElements", "EncodingType");
        }
    }
}
