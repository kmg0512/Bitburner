/** @param {NS} ns */
export async function main(ns) {
    var ram = ns.args[0];
    var num = ns.getPurchasedServers().length;

    // Iterator we'll use for our loop
    var i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            if (i < num) {
                ns.killall(ns.getPurchasedServers()[0], true);
                ns.deleteServer(ns.getPurchasedServers()[0]);
            }

            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            var hostname = ns.purchaseServer("pserv-" + i, ram);
            var script = String(ns.args[1]);
            await ns.scp(script, hostname);
            ns.exec(script, hostname, Math.floor(ram / ns.getScriptRam(script)));
            ++i;
        }

        await ns.sleep(1000);
    }
}
