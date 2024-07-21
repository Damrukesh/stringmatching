export function naive(pattern, text) {
    let count = 0;
    for (let i = 0; i <= text.length - pattern.length; i++) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) count++;
    }
    return count;
}

// Dummy implementations of other algorithms
export function kmp(pattern, text) {
    return 0; // Replace with actual implementation
}

export function bm(pattern, text) {
    return 0; // Replace with actual implementation
}

export function rk(pattern, text) {
    return 0; // Replace with actual implementation
}
