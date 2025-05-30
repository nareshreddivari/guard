import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure-native";

// Create a resource group
const resourceGroup = new azure.resources.ResourceGroup("rg-example");

// import * as pulumi from "@pulumi/pulumi";

// const config = new pulumi.Config();
// export const message = "Pulumi setup complete!";
