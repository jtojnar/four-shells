# Standard library
import os
import urllib.parse

# Environment
COORDINATOR_URL = os.environ['NIX_IPFS_COORDINATOR_URL']
PORT = os.environ['NIX_IPFS_NODE_PORT']

# Constants
MAX_AGGRESSIVE_READ = 1048576  # 1 MiB

_SUBSTITUTER = urllib.parse.urlparse(os.environ['NIX_IPFS_NODE_SUBSTITUTER'])
SUBSTITUTER_SCHEME = _SUBSTITUTER.scheme
SUBSTITUTER_NETLOC = _SUBSTITUTER.netloc
SUBSTITUTER = f'{SUBSTITUTER_SCHEME}://{SUBSTITUTER_NETLOC}'
