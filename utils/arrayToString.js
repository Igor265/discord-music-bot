
export default function arrayToString(args) {
    // Remove the first element ('!play') from the array
    args.shift();
    // Join the remaining elements into a string, separated by spaces
    return args.join(' ').trim();
}