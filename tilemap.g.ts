// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000303030303030303030303030303000003010101010101010101010101030000030101010101010101010101010300000301010101010101010101010103000003010101010101010101010101030000030101010101010101010101010300000301010101010202010101010103000003010101010102020101010101030000030101010101010101010101010300000301010101010101010101010103000003010101010101010101010101030000030101010101010101010101010300000301010101010101010101010103000003030303030303030303030303030000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile2,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
