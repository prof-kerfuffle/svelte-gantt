export {};

declare global {
    interface Window {
        gantt: InstanceType<typeof import('svelte-gantt').SvelteGantt>;
    }
}