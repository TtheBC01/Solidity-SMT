import { keccak256 } from 'viem';

export function createSparseRoot(depth: number): string[] {
    const path: string[] = new Array(n).fill('')
    return path.map(node => {
        const hash = keccak256(
            keccak256('0x') + keccak256('0x'));
        // Ensure the hash is 32 bytes (64 hex characters) long
        return `0x${hash.slice(2).padStart(64, '0')}`;
    });
}