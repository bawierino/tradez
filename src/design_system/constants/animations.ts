export const animationDurationsRawMs = {
    short: 200
};

export const animationDurations: { [index: string]: string } = {};
Object.entries(animationDurationsRawMs).forEach(entry => {
    animationDurations[entry[0]] = `${entry[1]}ms`;
});
