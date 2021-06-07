import type mongoose from 'mongoose';
import type { ObjectId } from 'mongodb';

declare module '@wildflowerhealth/mongoose-diff-history/diffHistory' {
    export interface IDiffHistoryDoc extends mongoose.Document {
        _id: ObjectId;
        collectionId: ObjectId;
        collectionName: string;
        diff: any;
        version: number;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface IDiffHistoryOptions {
        omit?: string[],
        onNewDiff?: (doc: IDiffHistoryDoc) => any
    }

    export const plugin: (schema: any, options: IDiffHistoryOptions) => void
}