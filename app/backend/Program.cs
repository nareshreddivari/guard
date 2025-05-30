using Microsoft.AspNetCore.Builder;
var app = WebApplication.Create();
app.MapGet("/", () => "Hello World - .NET API");
app.Run();