import { hubspotClient } from "@/logic/hubspot/hubspotClient";
import { keysOf } from "@/utils/general";

export function bound<T extends Record<string, unknown>>(x: T): T {
  for (const name of keysOf(x)) {
    const value = x[name];
    if (typeof value === "function") {
      x[name] = value.bind(x);
    }
  }
  return x;
}

export function describeHubspot() {
  return bound({
    getAllClients: async () => {
      return await hubspotClient.crm.contacts.getAll();
    },
    getAllCompanies: async () => {
      return await hubspotClient.crm.companies.getAll();
    },
  });
}
