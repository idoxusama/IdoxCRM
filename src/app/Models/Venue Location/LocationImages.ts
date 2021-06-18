export class LocationImages{
    locationAddressID:number;
    files=[];
    areaImageName:string;
    areaImageID:number;
    description:string;
    userID:number;
}

export interface LocationImage{
    id:number;
    locationAddressID:number;
    multidimensionalStuffID:number;
    areaImageName:string;
    areaImagePath:string;
    description:string;
    userID:number;
    fileContent:Blob[];
}