// Can't use dynamic classes through component props. This is how tailwind works (see https://tailwindcss.com/docs/content-configuration#class-detection-in-depth).
// This object references theme colors and associate it with its full background tailwind css class string, such as tailwind is able to detect these class names.
const colorVariants = {
    'lele-orange': 'bg-lele-orange',
    'UT-orange': 'bg-UT-orange',
    'blue-green': 'bg-blue-green',
    'prussian-blue': 'bg-prussian-blue',
    'selective-yellow': 'bg-selective-yellow',
    'sky-blue': 'bg-sky-blue',
    'lele-blue': 'bg-lele-blue',
}

export default colorVariants;