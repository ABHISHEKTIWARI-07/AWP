angular
  .module("addressBookApp.filters", [])
  .filter("searchFilter", () => {
    return (contacts, searchType, searchText) => {
      if (!searchText) {
        return contacts;
      }

      let keyword = RegExp(searchText, "i");
      return contacts.filter((contact) => {
        switch (searchType) {
          case "name":
            return keyword.test(
              contact.title + " " + contact.first_name + " " + contact.last_name
            );
          case "city":
            return keyword.test(contact.address.city);
          case "state":
            return keyword.test(contact.address.state);
        }
      });
    };
  });
