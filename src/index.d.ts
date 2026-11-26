declare function plugin(options?: {}): {
    handler: () => void
}

declare namespace plugin {
    const __isOptionsFunction: true
}

export = plugin
