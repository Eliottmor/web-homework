# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


alias Homework.Merchants.Merchant
alias Homework.Transactions.Transaction
alias Homework.Users.User 

merchants = [
    %{
        id: "da3cd970-5a26-4cb4-8605-c80e217a5c03",
        description: "The greatest cars",
        name: "Tesla"
    }
];

users = [
    %{
        id: "da3cd970-5a26-4cb4-8605-c80e217a5c04",
        dob: "1/01/1978",
        first_name: "Elon",
        last_name: "Musk"
    }
];

transactions = [
    %{
        id: "da3cd970-5a26-4cb4-8605-c80e217a5c02",
        amount: 4500000,
        credit: true,
        debit: false, 
        description: "Model 3",
        merchant_id: "da3cd970-5a26-4cb4-8605-c80e217a5c03",
        user_id: "da3cd970-5a26-4cb4-8605-c80e217a5c04"
    }
]

Enum.each(merchants, fn(data) -> 
    Homework.Repo.insert!(%Merchant
    {
        id: data.id, 
        name: data.name, 
        description: data.description
    },
    on_conflict: :nothing)
end)

Enum.each(users, fn(data) -> 
    Homework.Repo.insert!(%User
    {
        id: data.id, 
        dob: data.dob, 
        first_name: data.first_name, 
        last_name: data.last_name
    },
    on_conflict: :nothing)
end)

Enum.each(transactions, fn(data) -> 
    Homework.Repo.insert!(%Transaction
    {
        id: data.id, 
        amount: data.amount, 
        debit: data.debit, 
        credit: data.credit, 
        description: data.description,
        merchant_id: data.merchant_id, 
        user_id: data.user_id
    },
    on_conflict: :nothing)
end)
