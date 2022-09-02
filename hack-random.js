/** @param {NS} ns */
export async function main(ns) {
	// Defines the "target server", which is the server
	// that we're going to hack.
	var targetList = [	"foodnstuff",
						"harakiri-sushi",
						"hong-fang-tea",
						"joesguns",
						"n00dles",
						"sigma-cosmetics",
						"iron-gym",
						"darkweb",
						"nectar-net",
						"CSEC",
						"max-hardware",
						"zer0",
						"neo-net",
						"omega-net",
						"phantasy",
						"silver-helix",
						"avmnite-02h",
						"crush-fitness",
						"johnson-ortho",
						"the-hub",
						"computek",
						"netlink",
						"catalyst",
						"I.I.I.I",
						"rothman-uni",
						"summit-uni",
						"syscore",
						"zb-institute",
						"millenium-fitness",
						"rho-construction",
						"aevum-police",
						"alpha-ent",
						"lexo-corp",
						"global-pharm",
						"snap-fitness",
						"aerocorp",
						"galactic-cyber",
						"unitalife",
						"deltaone",
						"omnia",
						"defcomm",
						"icarus",
						"solaris",
						"univ-energy",
						"zeus-med",
						"nova-med",
						"zb-def",
						"infocomm",
						"taiyang-digital",
						"applied-energetics",
						"run4theh111z",
						"microdyne",
						"titan-labs",
						"fulcrumtech",
						"helios",
						"stormtech",
						"vitalife",
						".",
						"4sigma",
						"kuai-gong",
						"omnitek",
						"b-and-a",
						"blade",
						"clarkinc",
						"nwo",
						"powerhouse-fitness",
						"ecorp",
						"fulcrumassets",
						"megacorp",
						"The-Cave",
						"w0r1d_d43m0n"];

	// Infinite loop that continously hacks/grows/weakens the target server
	while (true) {
		var target = String(targetList[Math.floor(Math.random() * targetList.length)]);
		if (!ns.hasRootAccess(target))	continue;
		if (ns.getHackingLevel() < ns.getServerRequiredHackingLevel(target))	continue;
		
		// Defines how much money a server should have before we hack it
		// In this case, it is set to 75% of the server's max money
		var moneyThresh = ns.getServerMaxMoney(target) * 0.75;

		// Defines the maximum security level the target server can
		// have. If the target's security level is higher than this,
		// we'll weaken it before doing anything else
		var securityThresh = ns.getServerMinSecurityLevel(target) + 5;

		if (ns.getServerSecurityLevel(target) > securityThresh) {
			// If the server's security level is above our threshold, weaken it
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			// If the server's money is less than our threshold, grow it
			await ns.grow(target);
		} else {
			// Otherwise, hack it
			await ns.hack(target);
		}

		await ns.sleep(1000);
	}
}
