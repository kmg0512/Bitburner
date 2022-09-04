/** @param {NS} ns */
export async function main(ns) {
    var targetList = ["foodnstuff",
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

    for (var i = 0; i < targetList.length; i++) {
        var target = String(targetList[i]);
        if (ns.hasRootAccess(target)) continue;
        if (ns.getHackingLevel() < ns.getServerRequiredHackingLevel(target)) continue;

        if (ns.getServerNumPortsRequired(target) < 1) {
            // Get root access to target server
            ns.nuke(target);
            continue;
        }

        if (ns.fileExists("BruteSSH.exe", "home")) {
            ns.brutessh(target);
        } else {
            continue;
        }

        if (ns.getServerNumPortsRequired(target) < 2) {
            // Get root access to target server
            ns.nuke(target);
            continue;
        }

        if (ns.fileExists("FTPCrack.exe", "home")) {
            ns.ftpcrack(target);
        } else {
            continue;
        }

        if (ns.getServerNumPortsRequired(target) < 3) {
            // Get root access to target server
            ns.nuke(target);
            continue;
        }

        if (ns.fileExists("relaySMTP.exe", "home")) {
            ns.relaysmtp(target);
        } else {
            continue;
        }

        if (ns.getServerNumPortsRequired(target) < 4) {
            // Get root access to target server
            ns.nuke(target);
            continue;
        }

        if (ns.fileExists("HTTPWorm.exe", "home")) {
            ns.httpworm(target);
        } else {
            continue;
        }

        if (ns.getServerNumPortsRequired(target) < 5) {
            // Get root access to target server
            ns.nuke(target);
            continue;
        }

        if (ns.fileExists("SQLInject.exe", "home")) {
            ns.sqlinject(target);

            // Get root access to target server
            ns.nuke(target);
        }
    }
}
