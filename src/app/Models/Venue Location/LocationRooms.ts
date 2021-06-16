export class LocationRooms{
    locationAddressID:number;
    userID:number;
    locationRoomsList:Array<LocationRoomsList>=new Array();
}

export class LocationRoomsList{
    id:number;
    venueRoomName:string;
    isPvtRoom:boolean;
    amt:string;
}