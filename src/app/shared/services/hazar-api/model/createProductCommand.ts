/**
 * My API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateProductCommand { 
    id?: number;
    name?: string | null;
    description?: string | null;
    price?: number;
    stock?: number;
    imageUrl?: string | null;
    categoryId?: number;
    brandId?: number;
}
