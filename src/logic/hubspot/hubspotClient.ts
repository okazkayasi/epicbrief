const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

import { Client } from "@hubspot/api-client";
export const hubspotClient = new Client({ accessToken: HUBSPOT_ACCESS_TOKEN });
