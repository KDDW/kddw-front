export const storage = {
	get(key: string): any {
		if (!key) return null;
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	},
	set(key: string, value: any): void {
		if (!key || !value) return;
		localStorage.setItem(key, JSON.stringify(value));
	},
	destroy(key: string): void {
		if (!key) return;
		localStorage.removeItem(key);
	},
	clear(): void {
		localStorage.clear();
	},
};
