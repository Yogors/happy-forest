export function adapterOfFetchUserList(data: any): any {
  if (!data) return [];

  return data.map((item: any, index: number) => {
    const user: UserManagement.User = {
      index: index + 1,
      key: item.id,
      ...item
    };

    return user;
  });
}
