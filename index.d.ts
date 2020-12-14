interface DenoResponse {
	ms: number;
	stderr: string;
	stdout: string;
}

declare function run(script: string): Promise<DenoResponse>;

export = run;
