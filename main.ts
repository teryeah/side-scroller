scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true)
    effects.confetti.endScreenEffect()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    pause(1000)
    game.over(false)
    effects.confetti.endScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
})
let mySprite: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundColor(8)
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`320008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040506070408090a0a070b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000c0000000000000000000c000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000c000000000c000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030101010101010101010101010101010202010101010102020101010101010101020202010101010101010101010101010103`, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    222222222222222..22222..22222222...222222222222222
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 . . . . . . . . . . . 
    . 2 2 2 2 . . . . . . . . . . . 
    . 2 d d d . . . . . . . . . . . 
    . 2 d d f . . . . . . . . . . . 
    2 2 d d d d . . . . . . . . . . 
    . . f b b . . . . . . . . . . . 
    6 6 2 2 b b . . . . . . . 6 6 . 
    6 6 2 2 2 2 . . f . . . 6 6 6 . 
    6 6 2 2 2 2 f f f . . 6 6 6 . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
