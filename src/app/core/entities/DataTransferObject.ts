import { ErrorObject } from './ErrorObject';
import { KeyValuePair } from './KeyValuePair';

export interface DataTransferObject {
    Conditions: KeyValuePair<string, any[]>[];
    Data: any;
    DataAddon: any;
    DocTypeCode: string;
    Errors: ErrorObject[];
    IsSuccess: boolean;
    IsSuccessCall: boolean;
    KeyValue: any;
    NumberField: string;
    RecordCount: number;
    RecordPosition: number;
    ReturnObject: boolean;
    ServerDateTime: Date;
}
