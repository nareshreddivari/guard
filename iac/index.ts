// import * as pulumi from "@pulumi/pulumi";
// import * as azure from "@pulumi/azure-native";

// // Sample ACA resource
// const resourceGroup = new azure.resources.ResourceGroup("rg-demo");

// export const resourceGroupName = resourceGroup.name;
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
export const message = "Pulumi setup complete!";
