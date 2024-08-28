export * from './brand.service';
import { BrandService } from './brand.service';
export * from './category.service';
import { CategoryService } from './category.service';
export * from './product.service';
import { ProductService } from './product.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [BrandService, CategoryService, ProductService, UserService];
