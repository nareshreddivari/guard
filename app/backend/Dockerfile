# Use the official .NET SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

# Copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o /app

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 80
ENTRYPOINT ["dotnet", "YourApp.dll"]
