import { Injectable } from '@nestjs/common';
// it allow us to inject as this as dependency into constructors.
import { Item } from './interfaces/item.interfaces';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3434343545',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '98495485',
      name: 'Item Two',
      qty: 50,
      description: 'This is item two',
    },
  ];
  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
