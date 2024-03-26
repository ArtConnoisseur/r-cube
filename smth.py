for i in range(1, 201):
    string = f'''
    {i/200*100}%{{
        transform: rotate({i/200*360}deg);
    }}'''
    print(string)
