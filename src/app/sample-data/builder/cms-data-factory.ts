import { ContentSlotComponentData } from '@spartacus/core';

export interface FactoryData {
  [slot: string]: (string | FactoryComponentData)[];
}
export interface FactoryComponentData {
  type: string;

  [x: string]: any;
}

export class SampleDataFactory {
  static buildSlots(slots: FactoryData) {
    const result = Object.assign(
      {},
      ...Object.keys(slots).map(slot => ({
        [slot]: {
          componentIds: slots[slot].map(component =>
            SampleDataFactory.getUid(component)
          ),
        },
      }))
    );
    return result;
  }

  static buildComponents(types: (string | FactoryComponentData)[]) {
    const components = Object.assign(
      {},
      ...types.map(type => SampleDataFactory.buildComponent(type))
    );
    return components;
  }

  static buildComponent(
    comp: string | FactoryComponentData
  ): ContentSlotComponentData {
    const uid = SampleDataFactory.getUid(comp);
    const type = SampleDataFactory.getType(comp);
    const component = {
      [uid]: {
        typeCode: type,
        flexType: type,
      },
    };
    if (typeof comp !== 'string') {
      const data = Object.assign({}, comp);
      delete data.type;
      component[uid] = Object.assign(component[uid], data);
    }
    return component;
  }

  static getUid(comp: string | FactoryComponentData): string {
    return typeof comp === 'string'
      ? (comp as string)
      : (comp as FactoryComponentData).uid ||
          (comp as FactoryComponentData).type;
  }

  static getType(comp: string | FactoryComponentData): string {
    return typeof comp === 'string'
      ? (comp as string)
      : (comp as FactoryComponentData).type;
  }
}
