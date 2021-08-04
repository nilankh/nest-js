// import { Injectable } from '@nestjs/common';
// // it allow us to inject as this as dependency into constructors.
// import { Item } from './interfaces/item.interfaces';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';

// @Injectable()
// export class ItemsService {
//   constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

//   async findAll(): Promise<Item[]> {
//     return await this.itemModel.find();
//   }

//   async findOne(id: string): Promise<Item> {
//     return await this.itemModel.findOne({ _id: id });
//   }
// }


import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interfaces';
import { ItemDocument } from './schemas/item.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item-dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}

