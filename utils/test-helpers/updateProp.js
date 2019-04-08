export function updateProp(props = {}, propName, value) {
    expect(props).toHaveProperty(propName);
    props[propName] = value;
}
