import { JsonConverter, JsonCustomConvert } from 'json2typescript';

export function ensureIsArray(elements: Array<any> | any): Array<any> {
  if (elements === undefined || elements === null || elements === '') {
    elements = [];
  } else if (!Array.isArray(elements)) {
    elements = [elements];
  }
  return elements;
}

@JsonConverter
export abstract class AbstractConverter<T> implements JsonCustomConvert<T> {
  serialize(data: T): any {
    // TODO throw exception
    console.log('Not implemented !!');
  }

  abstract deserialize(data: any): T;
}