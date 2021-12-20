onEvent('recipes', event => {

    // Add shaped recipe for chests
    event.shaped('4x minecraft:chest', [
        'WWW',
        'W W',
        'WWW'
    ], {
        W: '#minecraft:logs'
    })

    // Add shapeless recipe for making sticks from logs
    event.shapeless('16x minecraft:stick', [
        '#minecraft:logs', '#minecraft:logs'
    ])

    // Add shaped recipe for 99 Mods Patchouli book
    event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:99mtw"}'), [
        'BL'
    ], {
        B: 'minecraft:book',
        L: 'minecraft:stick'
    })

})