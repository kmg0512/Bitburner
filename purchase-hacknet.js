/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        var num = ns.hacknet.numNodes();
        if (num == 0) {
            if (ns.getServerMoneyAvailable("home") > ns.hacknet.getPurchaseNodeCost()) {
                ns.hacknet.purchaseNode();
            }
            await ns.sleep(1000);
            continue;
        }

        for (var i = 0; i < num; i++) {
            while (ns.getServerMoneyAvailable("home") > ns.hacknet.getLevelUpgradeCost(i, 1)) {
                ns.hacknet.upgradeLevel(i, 1);
            }
            while (ns.getServerMoneyAvailable("home") > ns.hacknet.getRamUpgradeCost(i, 1)) {
                ns.hacknet.upgradeRam(i, 1);
            }
            while (ns.getServerMoneyAvailable("home") > ns.hacknet.getCoreUpgradeCost(i, 1)) {
                ns.hacknet.upgradeCore(i, 1);
            }
        }

        var stat = ns.hacknet.getNodeStats(num - 1);
        if (num % 3 == 0 && (stat.level < 200 || stat.ram < 64 || stat.cores < 16)) {
            await ns.sleep(1000);
        } else {
            if (ns.getServerMoneyAvailable("home") > ns.hacknet.getPurchaseNodeCost()) {
                ns.hacknet.purchaseNode();
            }

            await ns.sleep(1000);
        }
    }
}
