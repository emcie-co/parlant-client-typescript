/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { CoherenceCheck } from "./CoherenceCheck";
import { ConnectionProposition } from "./ConnectionProposition";
export const GuidelineInvoiceData = core.serialization.object({
    coherenceChecks: core.serialization.property("coherence_checks", core.serialization.list(CoherenceCheck)),
    connectionPropositions: core.serialization.property("connection_propositions", core.serialization.list(ConnectionProposition).optional()),
});
