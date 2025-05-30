import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure-native";

// Sample ACA resource
const resourceGroup = new azure.resources.ResourceGroup("rg-demo");

export const resourceGroupName = resourceGroup.name;
