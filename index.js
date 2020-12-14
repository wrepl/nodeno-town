const https = require("https");

const run = async (script) => {
	const data = {
		module: Buffer.from(script).toString("base64"),
	};

	return new Promise((resolve, reject) => {
		const req = https.request(
			{
				method: "POST",
				hostname: "deno.town",
				port: 443,
				path: "/anon",
				headers: { "Content-Type": "application/json" },
			},
			(res) => {
				res.setEncoding("utf8");
				let responseBody = "";

				res.on("data", (chunk) => {
					responseBody += chunk;
				});

				res.on("end", () => {
					const response = JSON.parse(responseBody);
					if (response.stderr === "Compile file:///tmp/mod.tsx\n")
						response.stderr = "";
					resolve(response);
				});
			}
		);

		req.on("error", reject);
		req.write(JSON.stringify(data));
		req.end();
	});
};

module.exports = run;
