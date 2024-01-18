from investopedia_api import InvestopediaApi
credentials = {"username" "youremail@example.org", "password": "your password"}
client = InvestopediaAPI(credentials)
p = client.portfolio
print("account value: %s" % p.account_value)
