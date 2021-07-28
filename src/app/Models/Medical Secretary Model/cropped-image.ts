export class CroppedImages{
    id:number;
    image:string;
    note:string;
    references:CroppedRefernces[];
}

export class CroppedRefernces{
    croppedImageId:number;
    image:string;
}