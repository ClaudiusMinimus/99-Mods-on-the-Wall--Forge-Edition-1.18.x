onEvent('recipes', event => {
    event.remove({output: 'ironchest:crystal_chest'})
    event.remove({output: 'ironchest:trapped_crystal_chest'})
})

onEvent('jei.hide.items', event => {
    event.hide('ironchest:crystal_chest')
    event.hide('ironchest:trapped_crystal_chest')
})