# EC2 (Elastic Cloud Compute)

* Hardware of the servers OR the virtual machine depending on what tier you pay for
* Can run a variety of OS (Mac, Linux, Ubuntu, etc.)
* Allows for port forwarding
* Most important things:
    * Auto-scaling: Allows us to determine how many instances to spin up when we reach a maximum of our throughput OR what tier to raise to if we're consistently above our bandwidth
    * Load Balancing: Take the throughput and split it between multiple instances (keep instances healthy, don't overload)
    * Security: If we need to allow/disallow traffic from regions/IP regions, network & security section handles it 
        * Ingress (incoming traffic)
        * Egress (Outgoing traffic)