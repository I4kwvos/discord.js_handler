const client = require(`../index.js`)

client.on(`interactionCreate`, async interaction => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
        const cmd = client.slashCommands.get(interaction.commandName)
        if (!cmd) {
            interaction.deferReply({ ephemeral: true })
            interaction.followUp({ content: "An error has occured!" })
        }

        cmd.run(client, interaction)
    }
})