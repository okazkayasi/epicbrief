import { hubspotClient } from "@/logic/hubspot/hubspotClient";
import { keysOf } from "@/utils/general";
import { FilterGroup } from "@hubspot/api-client/lib/codegen/crm/objects/meetings";

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
    getCompanyById: async (id: string) => {
      return await hubspotClient.crm.companies.basicApi.getById(
        id,
        ["name"],
        [],
        ["meetings"]
      );
    },
    getAllMeetings: async () => {
      return await hubspotClient.crm.objects.meetings.searchApi.doSearch({
        filterGroups: [new FilterGroup()],
        sorts: [],
        properties: [],
        limit: 10,
        after: 0,
      });
    },
    getMeetingById: async (id: string) => {
      return await hubspotClient.crm.objects.meetings.basicApi.getById(
        id,
        [
          "hs_meeting_title",
          "hs_meeting_body",
          "hs_meeting_start_time",
          "hs_internal_meeting_notes",
        ],
        [],
        ["companies"]
      );
    },
  });
}

