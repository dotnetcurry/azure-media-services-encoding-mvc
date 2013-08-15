using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace AzureMediaPortal.StatusHub
{
    public class JobStatusHub : Hub
    {
        public void UpdateJobStatus(string assetId, string status)
        {
            Clients.All.updateJobStatus(assetId, status);
        }
    }
}